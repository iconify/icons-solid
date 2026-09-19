import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exa-61b8p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="exa-61b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-yandex-cloud"} {...others} />);
}

export default Component;
