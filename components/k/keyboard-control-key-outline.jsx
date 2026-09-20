import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jpaavtb5j {
  fill: currentColor;
  d: path("M6.4 13.4L5 12l7-7l7 7l-1.4 1.4L12 7.825z");
}
</style><path class="jpaavtb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-control-key-outline"} {...others} />);
}

export default Component;
