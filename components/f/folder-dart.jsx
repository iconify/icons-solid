import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru_ztdbjh.css';
import '../../css/b/b_qmrc7sq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ru_ztdbjh"/><path class="b_qmrc7sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-dart"} {...others} />);
}

export default Component;
