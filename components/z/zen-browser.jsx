import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9ufam33t.css';
import '../../css/v/vo-ay7btf.css';
import '../../css/w/w5m1tlf7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b z9ufam33t"/><path class="b vo-ay7btf"/><path class="b w5m1tlf7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:zen-browser"} {...others} />);
}

export default Component;
