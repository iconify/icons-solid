import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zv6zxab1c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.758 4.796l-7.5-2.75Q12.133 2 12 2t-.258.046l-7.5 2.75q-.108.04-.2.11q-.091.07-.157.165q-.066.094-.1.204q-.035.11-.035.225v6q0 7.276 7.973 10.447q.133.053.277.053t.277-.053Q20.25 18.776 20.25 11.5v-6q0-.115-.035-.225q-.034-.11-.1-.204q-.066-.095-.157-.165q-.092-.07-.2-.11");
}
</style><path class="zv6zxab1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:travel-shield"} {...others} />);
}

export default Component;
