import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n28sx5w0p.css';
import '../../css/h/h81cxxbry.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n28sx5w0p"/><path class="h81cxxbry ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-workplace-search"} {...others} />);
}

export default Component;
