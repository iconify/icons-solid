import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpb8n_ast {
  fill: currentColor;
  d: path("M2 22v-2h2v-9H2V9l10-7l10 7v2h-2v9h2v2zm4-2h12zm2-2h2v-4l2 3l2-3v4h2v-7h-2l-2 3l-2-3H8zm10 2V8.65l-6-4.2l-6 4.2V20z");
}
</style><path class="hpb8n_ast"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:museum-outline"} {...others} />);
}

export default Component;
