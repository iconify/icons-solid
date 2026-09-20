import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nn37v2_mn {
  fill: currentColor;
  d: path("M12.92 3.315C13.726 2.6 15 3.171 15 4.25v15.495c0 1.079-1.274 1.651-2.08.934l-4.492-3.993a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.246V9.748a2.25 2.25 0 0 1 2.25-2.25h3.68a.75.75 0 0 0 .498-.19zm.58 1.491L9.425 8.43a2.25 2.25 0 0 1-1.495.568H4.25a.75.75 0 0 0-.75.75v4.498c0 .414.336.75.75.75h3.68a2.25 2.25 0 0 1 1.495.569l4.075 3.623zm2.72 4.413a.75.75 0 0 1 1.06 0L19 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L20.06 12l1.72 1.72a.75.75 0 0 1-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06");
}
</style><path class="nn37v2_mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:speaker-mute-24-regular"} {...others} />);
}

export default Component;
