import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8ofd0bhe.css';
import '../../css/m/m4slzdbss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8ofd0bhe"/><path class="m4slzdbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-outgoing-fill"} {...others} />);
}

export default Component;
