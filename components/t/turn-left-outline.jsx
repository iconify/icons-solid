import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z9ygskbif {
  fill: currentColor;
  d: path("M15.52 19v-7.884q0-.27-.174-.443q-.173-.173-.442-.173H5.916l2.1 2.1l-.708.708L4 10l3.308-3.308l.708.708l-2.1 2.1h8.988q.671 0 1.143.472t.472 1.144V19z");
}
</style><path class="z9ygskbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-left-outline"} {...others} />);
}

export default Component;
