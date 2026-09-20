import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.szha1du2n {
  fill: currentColor;
  d: path("M7.923 15.616V7.923h9.693v7.693zM3 19v-1h17V5h1v14z");
}
</style><path class="szha1du2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-medium-sharp"} {...others} />);
}

export default Component;
