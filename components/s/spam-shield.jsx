import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5iupub7r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.758 4.796l-7.5-2.75Q12.133 2 12 2t-.258.046l-7.5 2.75q-.108.04-.2.11q-.091.07-.157.165q-.066.094-.1.204q-.035.11-.035.225v6q0 7.276 7.973 10.447q.133.053.277.053t.277-.053Q20.25 18.776 20.25 11.5v-6q0-.115-.035-.225q-.034-.11-.1-.204q-.066-.095-.157-.165q-.092-.07-.2-.11M16.53 14.97q.106.105.163.243t.057.287t-.057.287t-.163.243q-.105.106-.243.163T16 16.25t-.287-.057t-.243-.163l-8-8q-.106-.105-.163-.243T7.25 7.5t.057-.287t.163-.243t.243-.163T8 6.75t.287.057t.243.163z");
}
</style><path class="m5iupub7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:spam-shield"} {...others} />);
}

export default Component;
