import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj7xjdbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wj7xjdbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:crop-solid"} {...others} />);
}

export default Component;
