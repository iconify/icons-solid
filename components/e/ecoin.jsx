import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7gzr4wdh.css';
import '../../css/w/w-1bkb7vd.css';
import '../../css/w/w22a27rwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g7gzr4wdh"/><path class="w-1bkb7vd"/><path class="w22a27rwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ecoin"} {...others} />);
}

export default Component;
