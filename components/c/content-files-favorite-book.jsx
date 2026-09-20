import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rawf947wb.css';
import '../../css/b/baxfr6ous.css';
import '../../css/k/k4thwtkyl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rawf947wb"/><path class="baxfr6ous"/><path class="k4thwtkyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-favorite-book"} {...others} />);
}

export default Component;
