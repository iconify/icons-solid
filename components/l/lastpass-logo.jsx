import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e8i8njv0w.css';
import '../../css/u/ufx6m_bfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="e8i8njv0w"/><path class="ufx6m_bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:lastpass-logo"} {...others} />);
}

export default Component;
