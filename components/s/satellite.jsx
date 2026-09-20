import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtbx9gb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mtbx9gb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:satellite"} {...others} />);
}

export default Component;
