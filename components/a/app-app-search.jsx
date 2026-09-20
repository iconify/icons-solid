import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_9cc6bpa.css';
import '../../css/g/gwt9xds0b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n_9cc6bpa"/><path class="gwt9xds0b ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-app-search"} {...others} />);
}

export default Component;
