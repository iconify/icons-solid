import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agbbkkx9a {
  fill: currentColor;
  d: path("M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6zm-3 6H7v-6c.55 0 1-.45 1-1s-.45-1-1-1V5h10v6c-.55 0-1 .45-1 1s.45 1 1 1z");
}

.lv8n9xbye {
  fill: currentColor;
  d: path("M9 13.05C9 14.68 10.34 16 12 16s3-1.32 3-2.95c0-1.31-.53-1.69-3-4.55c-2.48 2.88-3 3.25-3 4.55");
}
</style><path class="lv8n9xbye"/><path class="agbbkkx9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-oil-barrel"} {...others} />);
}

export default Component;
