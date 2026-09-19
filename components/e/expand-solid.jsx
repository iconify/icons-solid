import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo7i2ob4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yo7i2ob4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:expand-solid"} {...others} />);
}

export default Component;
