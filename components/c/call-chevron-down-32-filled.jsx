import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.e8hks6omm {
  fill: currentColor;
  d: path("M9.075 2.96a3.83 3.83 0 0 1 4.708 2.319l.917 2.447a4 4 0 0 1-1.042 4.35l-2.146 1.97q.063.223.156.511c.213.65.545 1.501 1.025 2.332c.48.832 1.051 1.544 1.508 2.053q.203.226.365.392l2.776-.874a4 4 0 0 1 4.29 1.273l1.68 2.042a3.8 3.8 0 0 1-.342 5.192c-2.638 2.459-6.738 3.111-9.606.5a31.8 31.8 0 0 1-6.056-7.53c-1.937-3.33-2.958-6.457-3.492-8.949c-.812-3.79 1.826-6.979 5.259-8.028m19.218 4.333a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L24 11.586z");
}
</style><path class="e8hks6omm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:call-chevron-down-32-filled"} {...others} />);
}

export default Component;
