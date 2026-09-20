import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2ucobmfu.css';
import '../../css/z/z6ggt6ojm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2ucobmfu"/><path class="z6ggt6ojm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pack"} {...others} />);
}

export default Component;
