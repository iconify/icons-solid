import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1fomeb2x.css';
import '../../css/i/ie06e3b6z.css';
import '../../css/t/tie69u5xw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1fomeb2x"/><path class="ie06e3b6z"/><path class="tie69u5xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:data-catalog"} {...others} />);
}

export default Component;
