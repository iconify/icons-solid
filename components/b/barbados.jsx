import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip1kq0bvs.css';
import '../../css/n/nu-yx8b6b.css';
import '../../css/a/awv06sg9f.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ip1kq0bvs"/><path class="nu-yx8b6b"/><path class="awv06sg9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:barbados"} {...others} />);
}

export default Component;
