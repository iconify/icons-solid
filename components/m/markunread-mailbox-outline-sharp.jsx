import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xhr_0nbrx {
  fill: currentColor;
  d: path("M6 14v-4H4v10h16V10H10V8h12v14H2V8h4V2h8v4H8v8zm-2-4v4zv10z");
}
</style><path class="xhr_0nbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markunread-mailbox-outline-sharp"} {...others} />);
}

export default Component;
