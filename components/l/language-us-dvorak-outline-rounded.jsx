import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbrsuijmw {
  fill: currentColor;
  d: path("M6 15h3.25V9H6zm-1 2q-.425 0-.712-.288T4 16V8q0-.425.288-.712T5 7h4.25q.825 0 1.413.588T11.25 9v6q0 .825-.587 1.413T9.25 17zm11.3 0q-.3 0-.55-.187t-.35-.463l-2.725-8.1q-.15-.45.125-.85t.775-.4q.3 0 .55.188t.35.462l2.15 6.3l2.15-6.3q.1-.275.35-.462t.55-.188q.5 0 .775.388t.125.862l-2.725 8.1q-.1.275-.35.463t-.55.187z");
}
</style><path class="tbrsuijmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-us-dvorak-outline-rounded"} {...others} />);
}

export default Component;
