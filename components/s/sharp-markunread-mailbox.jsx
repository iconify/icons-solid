import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o88bg8bub {
  fill: currentColor;
  d: path("M22 6H10v6H8V4h6V0H6v6H2v16h20z");
}
</style><path class="o88bg8bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-markunread-mailbox"} {...others} />);
}

export default Component;
