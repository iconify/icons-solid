import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uow25q6ka.css';
import '../../css/i/iyj96ne-g.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="uow25q6ka"/><path class="iyj96ne-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:nuget"} {...others} />);
}

export default Component;
