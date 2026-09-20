import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lq1ub8bof {
  fill: currentColor;
  d: path("M11.5 21V3h1v18zm3.23-4.5v-9h2v9zm-7.46 0v-9h2v9z");
}
</style><path class="lq1ub8bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-justify-center-outline-sharp"} {...others} />);
}

export default Component;
