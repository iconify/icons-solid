import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrv3mkade {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.758 4.796l-7.5-2.75Q12.133 2 12 2t-.258.046l-7.5 2.75q-.108.04-.2.11q-.091.07-.157.165q-.066.094-.1.204q-.035.11-.035.225v6q0 7.276 7.973 10.447q.133.053.277.053t.277-.053Q20.25 18.776 20.25 11.5v-6q0-.115-.035-.225q-.034-.11-.1-.204q-.066-.095-.157-.165q-.092-.07-.2-.11m-8.164 11.835Q7.75 14.159 7.75 11.5q0-2.75 2.75-2.75q.89 0 1.5.523q.61-.523 1.5-.523q2.75 0 2.75 2.75q0 2.659-3.844 5.131q-.091.058-.195.089q-.103.03-.211.03t-.211-.03t-.195-.089");
}
</style><path class="hrv3mkade"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:life-heart-shield"} {...others} />);
}

export default Component;
