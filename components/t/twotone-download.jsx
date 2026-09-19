import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqx-to7vc {
  fill: currentColor;
  d: path("M13 9V5h-2v6H9.83L12 13.17L14.17 11H13z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.hx7h1wb4b {
  fill: currentColor;
  d: path("M15 9V3H9v6H5l7 7l7-7zm-3 4.17L9.83 11H11V5h2v6h1.17zM5 18h14v2H5z");
}
</style><path class="gqx-to7vc"/><path class="hx7h1wb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-download"} {...others} />);
}

export default Component;
