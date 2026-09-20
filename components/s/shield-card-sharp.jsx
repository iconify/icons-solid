import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi833rbxo {
  fill: currentColor;
  d: path("M11 22v-9h12v9zm2-2h8v-2h-8zm0-4h8v-1h-8zm-4 4.7q-2.25-1.5-3.625-4.075T4 11.1V5l8-3l8 3v6H9z");
}
</style><path class="bi833rbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shield-card-sharp"} {...others} />);
}

export default Component;
