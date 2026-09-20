import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7wuixk5m.css';
import '../../css/k/kf5zcac5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o7wuixk5m"/><path class="kf5zcac5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-merge"} {...others} />);
}

export default Component;
