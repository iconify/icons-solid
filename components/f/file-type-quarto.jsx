import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.y8xs-xg-t {
  fill: var(--svg-color--74aadb, #74aadb);
  fill-rule: evenodd;
  d: path("M15 15.24V2C7.96 2.5 2.38 8.2 2 15.24Zm1.76 0H30A14.05 14.05 0 0 0 16.76 2zM15 17H2.02a14 14 0 0 0 12.96 12.95V17zm1.76 0v13a14 14 0 0 0 13.22-12.98H16.76z");
}
</style><path clip-rule="evenodd" class="y8xs-xg-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-quarto"} {...others} />);
}

export default Component;
