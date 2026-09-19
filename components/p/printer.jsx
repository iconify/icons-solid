import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygwxw340a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ygwxw340a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:printer"} {...others} />);
}

export default Component;
