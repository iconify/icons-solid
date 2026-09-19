import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ca0gilwts {
  fill: currentColor;
  d: path("M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2");
}

.rpxe9ibnu {
  cx: 12px;
  cy: 19px;
  r: 2px;
  fill: currentColor;
}
</style><circle class="rpxe9ibnu"/><path class="ca0gilwts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-priority-high"} {...others} />);
}

export default Component;
