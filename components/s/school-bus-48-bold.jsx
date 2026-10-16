import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwgm7fbxw.css';
import '../../css/c/cdyatobkg.css';
import '../../css/z/zcwxudbsj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bwgm7fbxw"/><path class="cdyatobkg"/><path class="zcwxudbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-bus-48-bold"} {...others} />);
}

export default Component;
