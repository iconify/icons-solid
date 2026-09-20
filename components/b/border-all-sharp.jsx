import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ko9t8y8rs {
  fill: currentColor;
  d: path("M13 21v-8h8v8zm0-10V3h8v8zM3 11V3h8v8zm0 10v-8h8v8z");
}
</style><path class="ko9t8y8rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:border-all-sharp"} {...others} />);
}

export default Component;
