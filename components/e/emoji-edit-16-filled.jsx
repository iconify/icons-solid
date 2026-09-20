import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.sym33_65h {
  fill: currentColor;
  d: path("M8 2a6 6 0 0 1 5.198 3a2.86 2.86 0 0 0-2.096.84l-.734.735a.75.75 0 1 0-1.043 1.043l-2.558 2.557a2.5 2.5 0 0 1-.63-.508a.5.5 0 1 0-.746.667q.296.329.664.576c-.296.364-.51.788-.623 1.245l-.282 1.126A6 6 0 0 1 8 2M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.73 3.627l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="sym33_65h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:emoji-edit-16-filled"} {...others} />);
}

export default Component;
