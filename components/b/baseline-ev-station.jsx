import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ouzue5zzv {
  fill: currentColor;
  d: path("m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77M18 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M8 18v-4.5H6L10 6v5h2z");
}
</style><path class="ouzue5zzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-ev-station"} {...others} />);
}

export default Component;
