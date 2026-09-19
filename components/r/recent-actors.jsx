import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.joje1jbft {
  fill: currentColor;
  d: path("M21 5v14h2V5zm-4 14h2V5h-2zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1M8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25S5.75 11.24 5.75 10S6.76 7.75 8 7.75M12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25z");
}
</style><path class="joje1jbft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:recent-actors"} {...others} />);
}

export default Component;
