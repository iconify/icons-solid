import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh22bq98t.css';
import '../../css/x/x37i8o26b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fh22bq98t"/><path class="x37i8o26b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:link-48"} {...others} />);
}

export default Component;
