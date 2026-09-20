import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pn1h92b0o {
  fill: currentColor;
  d: path("M232 108a12 12 0 0 0 12-12V64a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a12 12 0 0 0 12 12a20 20 0 0 1 0 40a12 12 0 0 0-12 12v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-12-12a20 20 0 0 1 0-40M36 170.34a44 44 0 0 0 0-84.68V68h52v120H36Zm184 0V188H112V68h108v17.66a44 44 0 0 0 0 84.68");
}
</style><path class="pn1h92b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ticket-bold"} {...others} />);
}

export default Component;
