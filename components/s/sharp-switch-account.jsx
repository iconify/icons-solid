import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kapwthfpr {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm2-4v16h16V2zm8 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3M7.76 16c1.47-1.83 3.71-3 6.24-3s4.77 1.17 6.24 3z");
}
</style><path class="kapwthfpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-switch-account"} {...others} />);
}

export default Component;
