import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrvut578x.css';
import '../../css/a/ah4e5rm9p.css';
import '../../css/c/c7jvyvb0t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hrvut578x"/><path class="ah4e5rm9p"/><path class="c7jvyvb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-woman-increasing-arrow"} {...others} />);
}

export default Component;
