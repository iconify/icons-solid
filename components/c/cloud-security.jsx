import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkrlvexpz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.758 4.796l-7.5-2.75Q12.133 2 12 2t-.258.046l-7.5 2.75q-.108.04-.2.11q-.091.07-.157.165q-.066.094-.1.204q-.035.11-.035.225v6q0 7.276 7.973 10.447q.133.053.277.053t.277-.053Q20.25 18.776 20.25 11.5v-6q0-.115-.035-.225q-.034-.11-.1-.204q-.066-.095-.157-.165q-.092-.07-.2-.11M8.5 17q-3.25 0-3.25-3.25q0-3.013 2.794-3.233q1.406-2.391 4.298-2.081q2.947.316 3.792 3.047q1.637.931 1.404 2.911q-.254 2.164-2.391 2.591Q15.074 17 15 17z");
}
</style><path class="fkrlvexpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cloud-security"} {...others} />);
}

export default Component;
