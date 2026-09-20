import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oyyfqbyde {
  fill: currentColor;
  d: path("M2 22V8h4V2h8v4H8v8h2V8h12v14z");
}
</style><path class="oyyfqbyde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markunread-mailbox-sharp"} {...others} />);
}

export default Component;
