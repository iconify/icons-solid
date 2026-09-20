import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayyw9ebet.css';
import '../../css/d/d7eo1qb3m.css';
import '../../css/m/mpamltbos.css';
import '../../css/b/bkwj7ybey.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ayyw9ebet"/><path class="d7eo1qb3m"/><path class="mpamltbos"/><path class="bkwj7ybey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:gitlab"} {...others} />);
}

export default Component;
