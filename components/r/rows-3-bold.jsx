import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgn7bubwt.css';
import '../../css/u/u-3cpkh9t.css';
import '../../css/f/fog6w8bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgn7bubwt"/><path class="u-3cpkh9t"/><path class="fog6w8bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-3-bold"} {...others} />);
}

export default Component;
