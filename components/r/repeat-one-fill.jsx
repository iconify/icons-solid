import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tx2l1j88h {
  fill: currentColor;
  d: path("M17.293 8.293L18.586 7H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V8a3 3 0 0 1 3-3h13.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414m-8 2l2-2A1 1 0 0 1 13 9v6a1 1 0 0 1-2 0v-3.586l-.293.293a.999.999 0 1 1-1.414-1.414M22 13v3a3 3 0 0 1-3 3H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 17H19a1 1 0 0 0 1-1v-3a1 1 0 0 1 2 0");
}
</style><path class="tx2l1j88h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:repeat-one-fill"} {...others} />);
}

export default Component;
