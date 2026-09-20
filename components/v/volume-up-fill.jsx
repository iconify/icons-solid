import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jytnoj_6w.css';
import '../../css/y/yeai0_c-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jytnoj_6w"/><path class="yeai0_c-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:volume-up-fill"} {...others} />);
}

export default Component;
