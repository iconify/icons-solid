import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gttptu1id {
  fill: currentColor;
  d: path("M22 16.05a4.95 4.95 0 0 1-8.45 3.5l-.843-.843a1 1 0 0 0-1.414 0l-.843.843A4.951 4.951 0 0 1 2 16.05V13h20zm-17.164-1.3a2.5 2.5 0 1 0 4.33 2.5zm10 2.5a2.5 2.5 0 0 0 4.33-2.5zM11.999 2a10 10 0 0 1 9.166 6h.335A1.5 1.5 0 0 1 23 9.5v.5a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 10v-.5A1.5 1.5 0 0 1 2.5 8h.333a10 10 0 0 1 9.166-6");
}
</style><path class="gttptu1id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:threat-actor-24-filled"} {...others} />);
}

export default Component;
