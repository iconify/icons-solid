import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jixoakntt {
  fill: currentColor;
  d: path("M5.923 15.616V5.923h11.693v9.693zM3 19v-1h17V5h1v14z");
}
</style><path class="jixoakntt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-large-sharp"} {...others} />);
}

export default Component;
