import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddtqbsbjt {
  fill: currentColor;
  d: path("M6.923 20h10.173l.383-3.5q-.881 0-1.656-.14t-2.1-.516q-.633-.194-1.306-.269t-1.355-.075q-1.214 0-2.355.268t-2.186.8zm-.511-4.461q1.125-.52 2.29-.78q1.165-.259 2.385-.259q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.091L18.866 4H5.116zM6.027 21L4 3h16l-2.008 18zm.896-1h-.402H17.48z");
}
</style><path class="ddtqbsbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:water-loss-outline-sharp"} {...others} />);
}

export default Component;
