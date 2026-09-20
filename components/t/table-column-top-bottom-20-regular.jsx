import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cr1__s0vi {
  fill: currentColor;
  d: path("M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5M14.5 16H13v-3h3v1.5l-.007.145A1.5 1.5 0 0 1 14.5 16M12 8v4H8V8zm1 0h3v4h-3zm0-4h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3zM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3zm3 1v4H4V8z");
}
</style><path class="cr1__s0vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-column-top-bottom-20-regular"} {...others} />);
}

export default Component;
